import { validateAccess } from "@/services";

export default async function log({ next, to }) {
    await validateAccess();

    return next();
}
