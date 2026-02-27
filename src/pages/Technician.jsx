import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../component/Table";

export default function Technician() {
    const [technicians, setTechnicians] = useState([]);
    const [roles, setRoles] = useState([]);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
        role: "",
        image: null
    })

    useEffect(() => {
        const fetchTechnicians = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/test");
                setTechnicians(res.data.data);
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false);
            }
        }
        fetchTechnicians()
    }, []);

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setForm({
                ...form,
                image: e.target.files[0]
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleEdit = (item) => {
        setForm({
            name: item.name,
            mobile: item.mobile,
            email: item.email,
            role: item.role._id,
            image: item.image,
        })
        setEditId(item._id);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("mobile", form.mobile);
            formData.append("email", form.email);
            formData.append("role", form.role);
            formData.append("image", form.image);

            let res;

            if (editId) {
                res = await axios.post(`http://localhost:8080/api/test/update/${editId}`, formData);
                setTechnicians(prev => (prev.map(item => item._id === editId ? res.data.data : item)));
                setEditId(null);
                window.location.reload();
            } else {
                res = await axios.post(`http://localhost:8080/api/test/add`, formData);
                setTechnicians(prev => [...prev, res.data.data]);
                window.location.reload();
            }
            setForm({
                name: '',
                mobile: "",
                email: "",
                role: "",
                image: null
            });
        } catch (err) {
            console.error(err)
        } finally {
            setSubmitting(false)
        }
    }

    const handleDelete = async (id) => {
        await axios.post(`http://localhost:8080/api/test/delete/${id}`);
        setTechnicians(prev => prev.filter(item => item._id !== id))
    }

    useEffect(() => {
        const fetchRoles = async () => {
            const res = await axios.get("http://localhost:8080/api/technical/");
            setRoles(res.data.data)
        };
        fetchRoles();
    }, [])

    const columns = [
        {
            key: "serial",
            label: "S/No",
            render: (_, index) => index + 1,
        },
        {
            key: "name",
            label: "Name"
        },
        {
            key: "email",
            label: "Email",
        },
        {
            key: "mobile",
            label: "Mobile",
        },
        {
            key: "role",
            label: "Role",
            render: (row) => row.role?.skill,
        },
        {
            key: "image",
            label: "Image",
            render: (row) =>
                row.image && (
                    <img
                        src={`http://localhost:8080/uploads/${row.image}`}
                        alt="technician"
                        style={{ width: "80px" }}
                    />
                ),
        },
    ];

    return (
        <div>
            <h1>Technicians List</h1>
            {loading ? (<div>Loading...</div>) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder="name"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Mobile</label>
                            <input
                                type="text"
                                name="mobile"
                                value={form.mobile}
                                placeholder="mobile"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                placeholder="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Roles</label>
                            <select name="role" value={form.role} onChange={handleChange}>
                                <option value="">Select Role</option>
                                {roles.map((role) => (
                                    <option key={role._id} value={role._id}>{role.skill}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>Image</label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" disabled={submitting}>{submitting ? "Submitting" : editId ? "Update" : "Submit"}</button>
                    </form>
                    <Table
                        columns={columns}
                        data={technicians}
                        renderActions={(row) => (
                            <>
                                <button onClick={() => handleEdit(row)}>Edit</button>
                                <button onClick={() => handleDelete(row._id)}>Delete</button>
                            </>
                        )}
                    />
                </>
            )}
        </div>
    )
}