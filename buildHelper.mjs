import { writeFile } from 'node:fs/promises'

export const buildHelper = async ({ config, pages }) => {

    console.log(`Starting build....`)

    const { outdir } = config


    for (const {out, page} of pages) {

        const path = `${outdir}${page ?? ''}/index.html`

        await writeFile(path, out)
    }

    console.log(`Build finished successfully!`)

}
