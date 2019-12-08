git add --all
git commit -m "v0.1 draft"
git push


gcloud functions deploy webscraper1 \
    --source https://source.developers.google.com/projects/webscraper-beta/repos/github_viktorrock_webscraper-beta/moveable-aliases/master/paths/+/master \
    --runtime=nodejs8 \
    --trigger-http
