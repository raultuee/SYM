import { token } from "@/lib/token";
import axios from "axios";

export interface GetRobotDetailsParams {
    id: number;
}

export interface GetRobotDetailsResponse {
    records: {
        id: number
        nome: string
        descricao: string
        cor: string
        status: number
        qtd_processadas: number
        qtd_error: number
        qtd_limit: number
        qtd_tentativas: number
        qtd_threads:string | null
        email: string
        cron: string
        createdAt: string
        updatedAt: string
    }[];
    meta: {
        server: string
        count: number
        limit: number
        offset: number
        page: number
        pageCount: number
    }
}

export async function getRobotDetails({ id }: GetRobotDetailsParams) {
    const url = `http://rpa-chucknorris.vittaresidencial.com.br:8080/robots/${id}`

    const response = await axios.get<GetRobotDetailsResponse>(url, {
        headers: {
            'token': token
        }
    })

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return response.data
}