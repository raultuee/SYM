import { token } from "@/lib/token";
import axios from "axios"

export interface GetUsersQuery {
    nome: string | null
    page?: number | null
    limit?: number | null
    pageCount?: number | null
    count?: number | null
}

export interface GetUsersResponse {
    records: {
        id: number;
        login: string;
        created_at: string | null;
        updated_at: string | null;
        token: string;
        email: string;
        nome: string;
        celular: string;
        setor: number;
        usuarioSafedoc: string | null;
        passwordSafedoc: string | null;
        ativo: boolean;
        ultimo_acesso: string;
        altera_contrato: number;
    }[];
    meta: {
        server: string;
        count: number;
        limit: number;
        offset: number;
        page: number;
        pageCount: number;
    }
}

export async function getUsers({ nome, page, pageCount, count }: GetUsersQuery) {
    const url = "http://rpa-chucknorris.vittaresidencial.com.br:8080/usuarios"

    const response = await axios.get(url, {
        headers: {
            'token': token
        },
        params: {
            nome,
            page,
            pageCount,
            count,
        }
    })

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return response.data
}