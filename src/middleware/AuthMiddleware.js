import GerenciarAcesso from "@/helpers/GerenciarAcesso";

export default async function log({ next, to }) {
    await GerenciarAcesso.check();

    return next();
}
