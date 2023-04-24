import GerenciarAcesso from "../components/Helpers/GerenciarAcesso";

export default async function log({ next, to }) {
    await GerenciarAcesso.check();

    return next();
}
