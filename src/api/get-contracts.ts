import { token } from "@/lib/token";
import axios from "axios";

export interface GetContractsQuery {
    cidade?: string | null
    cpf_adquirente?: string | null
    status?: string | null
    page?: number | null
    limit?: number | null
    pageCount?: number | null
    count?: number | null
    nome_adquirente?: string | null;
}

interface GetContractResponse {
   records: {
    id: number;
    empreendimento: string;
    cnpj_empreendimento: string;
    codigo_mega: string | null;
    composicao_renda: string;
    cpf_adquirente: string;
    cpf_proponente: string | null;
    data_cadastro: string;
    data_busca_torre: string;
    data_validacao_analista: string;
    data_atualiza_cliente_sys: string | null;
    data_confissao_divida: string | null;
    data_input_mega: string | null;
    data_upload_arquivo: string | null;
    nome_adquirente: string | null;
    nome_arquivo: string;
    nome_proponente: string | null;
    numero_contrato: string;
    numero_lote: string | null;
    ocorrencia: string;
    prazo_financiamento: string;
    renda_comprovada_adquirente: string;
    renda_nao_comprovada_adquirente: string;
    valorfgts: string;
    valor_financiamento: string;
    valor_subsidio: string;
    valor_terreno: string;
    data_assinatura: string | null;
    data_contrato: string;
    object_valid: number;
    object_valid_rpa: number;
    cidade: string;
    modalidade: number;
    alerta_cfd: string | null;
    alerta_upload_sys: string | null;
    alerta_input_mega: string | null;
    usuario_validou: number;
    nome_usuario_validou: string;
    run_mega: number;
    ativo: number;
    nome_usuario_deletou: string | null;
    usuario_deletou: string | null;
    torre: string;
    bloco: string;
    apartamento: string;
    unidade_sys: string;
    procuracao: string;
    cliente_assinou: number;
    data_aprovacao: string | null;
    aprovador: string | null;
    nome_aprovador: string | null;
    status: number;
    acumulado: string | null;
    acumulado_mes: string | null;
    registro_novo: string | null;
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

  export async function getContracts({ page, pageCount, count, nome_adquirente, cpf_adquirente, cidade, status,  }: GetContractsQuery, limit = 10) {
    const url = "http://rpa-chucknorris.vittaresidencial.com.br:8080/contratos"

    const response = await axios.get<GetContractResponse>(url, {
        headers: {
            'token': token
        },
        params: {
            nome_adquirente,
            page,
            limit,
            pageCount,
            count,
            cpf_adquirente,
            cidade,
            status,
        }
    })

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return response.data
}