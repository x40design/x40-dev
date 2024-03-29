GH_PAGES=../x40-dev-gh-pages

js:
	jshint src/documents/scripts/script.js
run:
	docpad run
deploy:
	rm -rf out/*
	docpad generate --env static
	rsync -r --delete --force --exclude=.git out/ "${GH_PAGES}"
	cd "${GH_PAGES}"; git add .; git commit -a -m "deploy"; git push
clean:
	rm -rf out/* node_modules
conf:
	npm install -g docpad
	npm install -g jshint
	npm install
	