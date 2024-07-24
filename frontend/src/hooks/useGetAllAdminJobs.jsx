import { setAdminJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAdminJobs = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${process.env.BACKEND_BASE_URL}/api/v1/job/getadminjobs`);
                if(res.data.success){ 
                    dispatch(setAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAdminJobs();
    }, []);
}
export default useGetAllAdminJobs;