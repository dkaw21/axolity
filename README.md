# Axolity

## SEO Maintenance Checklist

- Keep `robots.txt` and `sitemap.xml` in sync with canonical page URLs.
- Use trailing-slash canonical URLs for directory-based routes (for example `/building/`).
- Keep legacy `*.html` redirect stubs as `noindex` pages with canonical tags pointing to the directory route.
- After publishing SEO changes, re-submit `https://www.axolity.com/sitemap.xml` in Google Search Console.


## Google Indexing (Search Console)

1. In Google Search Console, add a **URL Prefix** property for:
   - `https://www.axolity.com`

2. Verify ownership (choose one):
   - **Meta tag method**
     1. In Search Console, copy your verification token.
     2. Replace `REPLACE_WITH_YOUR_TOKEN` in:
        - `/index.html`
        - `/building/index.html`
        - `/marketing/index.html`
        - `/research/index.html`
        - `/company/index.html`
        - `/hiring/index.html`
        - `/solutions/scaling/index.html`
     3. Deploy and click **Verify** in Search Console.
   - **HTML file method**
     1. Copy `google-site-verification-template.html`.
     2. Rename it to the exact filename Google provides (for example `googleXXXXXXXXXXXXXXXX.html`).
     3. Replace file contents with:
        - `google-site-verification: googleXXXXXXXXXXXXXXXX.html`
     4. Commit/deploy and click **Verify**.

3. Submit sitemap in Search Console:
   - `https://www.axolity.com/sitemap.xml`

4. Request indexing for homepage:
   - `https://www.axolity.com/`

5. Optional (Domain property via GoDaddy DNS TXT):
   1. In Search Console, choose **Domain** property and copy TXT value.
   2. In GoDaddy DNS for your domain, add a TXT record at host `@` with Google’s value.
   3. Save DNS changes, wait for propagation, then verify in Search Console.
