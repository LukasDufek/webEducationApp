import axios from "axios";

const url = 'api/tasks/';


class TaskService{
    //get items
    static getTasks(){

        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(item => ({
                        ...item,
                        zadani: item.zadani,
                        proRocnik: item.proRocnik,
                        vysledek: item.vysledek,
                        vysledekZaka: item.vysledekZaka,
                        odmena: item.odmena


                    }))
                )
            }catch (err){
                reject(err);
            }
        });
    }

    //create items
    static insertTask(text){
        return axios.post(url, {
            text_of_task:text.text_of_task,
            for_year:text.for_year,
            result:text.result,
            student_result:text.student_result,
            reward:text.reward,

        });
    }




    //delete items
    static deleteTask(id){
        return axios.delete(`${url}${id}`);
    }
}

export default TaskService;
