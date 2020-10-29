const { remote } = require('webdriverio');
(async ()=> {
    describe ('DuckDuckGo search', () => {
        it('searches for WebdriverIO', async() => {
            await browser.url('https://duckduckgo.com/')
            const searchFormInputHomepage = await browser.$('#search_form_input_homepage')
            await searchFormInputHomepage.setValue('Yoona')

            const searchButtonHomepage = await browser.$('#search_button_homepage')
            await searchButtonHomepage.click()
            // const className = $('.class*=Add');
            // console.log(className.getText());
            const title = await browser.getTitle()
            console.log('Title is: ' + title)
            // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
            await browser.deleteSession()
        })
    })
})().catch((e) => console.error(e))