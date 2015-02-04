PATH := $(PWD)/node_modules/.bin:$(PATH)

# Documentation
# =============

sassdoc:
	sassdoc ./stylesheets -v
	git add sassdoc
	git commit -m "Compile SassDoc"
	git subtree push --prefix sassdoc origin gh-pages


# Tools
# =====

rebuild:
	rm -rf node_modules
	npm install

.PHONY: sassdoc
.SILENT:
