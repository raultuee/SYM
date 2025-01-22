import { token } from "@/lib/token";
import axios from "axios";

export interface GetRobotsResponse {
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

export async function getRobots(page: number, limit: number = 7) {
    const url = "http://rpa-chucknorris.vittaresidencial.com.br:8080/robots"

    const response = await axios.get<GetRobotsResponse>(url, {
        headers: {
            'token': token
        },
        params: {
            page: page,
            limit: limit,
        }
    })

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return response.data
}