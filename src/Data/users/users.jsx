import { api } from "../Auth/Data";
import authHeader from "../Auth/AuthHelper";
import axios from "axios";

const getProfile = async (setIsLoading) => {
    try {
        setIsLoading(true);
        const response = await fetch(`${api}/profile`, {
            headers: authHeader(),
        });
        const data = await response.json();
        setIsLoading(false);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const getCounselorProfile = async (setIsLoading) => {
    try {
        setIsLoading(true)
        const response = await fetch(`${api}/counselor_profiles`, {
            headers: authHeader(),
        });
        const data = await response.json();
        setIsLoading(false);
        return data;
    } catch (error) {
        console.error(error)
    }
}
const getSingleCounselorProfile = async (setIsLoading, id) => {
    try {
        setIsLoading(true)
        const response = await fetch(`${api}/counselor_profiles/${id}`, {
            headers: authHeader(),
        });
        const data = await response.json();
        setIsLoading(false);
        return data;
    } catch (error) {
        console.error(error)
    }
}

const verifyCounsellor = async (id, navigate) => {
    axios.post(`${api}/verify/${id}`, {}, {
        headers: authHeader()
    })
        .then(() => {
            navigate(0)
        })
}

const deleteCounsellorProfile = async (navigate, id, setOpen) => {
    axios.delete(`${api}/counselor_profiles/${id}`, {
        headers: authHeader()
    })
        .then(() => {
            setOpen(false)
            navigate("/admin/be-counsellor")
        })
}

const beTherapist = (post, setOpen) => {
    axios.post(`${api}/counselor_profiles`, post, {
        headers: authHeader()
    })
        .then((data) => {
            setOpen(true)

        })
}

const bookAppointment = async (post, setIsLoading, navigate) => {
    try {
        setIsLoading(true)
        axios.post(`${api}/appointments`, post, {
            headers: authHeader()
        })
            .then(() => {
                setIsLoading(false)
                navigate("/client")
            })

    } catch (error) {
        console.error(error)
    }
}

export {
    getProfile, beTherapist, getCounselorProfile, bookAppointment, getSingleCounselorProfile, deleteCounsellorProfile, verifyCounsellor
}