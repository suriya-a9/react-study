import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        roleId: ""
    })

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/admin/list");
                setUsers(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers()
    }, []);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const res = await axios("http://localhost:8080/api/role/")
                setRoles(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchRoles()
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleUserRegistration = async (e) => {
        e.preventDefault();
        setSubmitting(true)
        try {
            const res = await axios.post(`http://localhost:8080/api/admin/register`, form);
            setUsers(prev => [...prev, res.data.data]);
            setForm({ name: "", email: "", password: "", roleId: "" });
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div>
            <h2>Admin users List</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <form onSubmit={handleUserRegistration}>
                        <div>
                            <label>Name: </label>
                            <input type="text" name="name" value={form.name} placeholder="name" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="mail" name="email" value={form.email} placeholder="email" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" name="password" value={form.password} placeholder="password" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Select Role: </label>
                            <select
                                name="roleId"
                                value={form.roleId}
                                onChange={handleChange}
                            >
                                <option value="">Select Role</option>
                                {roles.map((role) => (
                                    <option key={role._id} value={role._id}>{role.name}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" disabled={submitting}>{submitting ? "submitting" : "Register"}</button>
                    </form>
                    <table border="1" cellPadding="10" cellSpacing="5">
                        <thead>
                            <tr>
                                <th>S/no</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}