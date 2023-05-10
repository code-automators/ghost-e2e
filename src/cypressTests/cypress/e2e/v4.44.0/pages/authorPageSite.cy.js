class AuthorPageSite {
    getAuthorOptions() {
        const authorOptions = cy.get("span.author-social-link");
        console.info(authorOptions);
        return authorOptions;
    }
}

export { AuthorPageSite };