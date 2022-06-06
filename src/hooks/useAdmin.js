import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState('');
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://intense-gorge-54941.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.role)
                    setAdminLoading(false);
                })
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;