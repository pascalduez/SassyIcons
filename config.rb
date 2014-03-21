# Require any additional compass plugins here.
require 'compass'
require 'SassyLists'

# Set this to the root of your project when deployed:
http_path = "/"
project_path = "test"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
generated_images_dir = "/img/sprites"
# generated_images_path = "/img/sprites"
http_generated_images_path = "/img/sprites"
javascripts_dir = "js"

# add_import_path "../stylesheets"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
