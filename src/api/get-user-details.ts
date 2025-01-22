import { token } from "@/lib/token";
import axios from "axios";

export interface GetUserDetailsParams {
    id: number;
}

export interface GetUserDetailsResponse {
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
}

export async function getUserDetails({ id }: GetUserDetailsParams) {
    const url = `http://rpa-chucknorris.vittaresidencial.com.br:8080/usuarios/${id}`

    const response = await axios.get<GetUserDetailsResponse>(url, {
        headers: {
            'token': token
        },
    })

    return response.data
    
}