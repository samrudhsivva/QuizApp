import axios from 'axios';
export const fetchQuestions= async ()=>
{
    try{
    const response = await axios.get(
      "http://private-anon-c06008d89c-quizmasters.apiary-mock.com/questions"
    );
    return response.data;
    }

    catch(error)
    {
        console.log(error);
        return error;
    }
}
