import GerenciarAcesso from "@/helpers/GerenciarAcesso";

export default async function log({ next, to }) {
    await GerenciarAcesso.validateAccess();

    return next();
}
