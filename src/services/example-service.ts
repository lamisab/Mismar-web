import { makeRequest } from "src/core/data-access/http.service"
import { HttpMethods } from "src/core/enums/httpMethods.enum"


export const getData = () => {
    return makeRequest({
        url:'',
        method: HttpMethods.GET
    })
}