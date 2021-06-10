const puppeteer = require('puppeteer');

const puppet = {
    async init () {
        await this.getPage();

        await this.page.goto('http://localhost:3000/');
        await this.page.click('button');
    },

    async getPage() {
        this.browser = await puppeteer.launch({ headless: false, defaultViewport: null });
        this.page = (await this.browser.pages())[0];
    },
}

module.exports = puppet;
