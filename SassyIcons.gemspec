require './lib/SassyIcons'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = SassyIcons::VERSION
  s.date = SassyIcons::DATE

  # Gem Details
  s.name = "SassyIcons"
  s.rubyforge_project = "SassyIcons"
  s.description = %q{Flexible icons system.}
  s.summary = %q{Flexible system to manipulate icons, SVG, PNG, sprites.}
  s.authors = ["Pascal Duez"]
  s.homepage = "http://github.com/pascalduez/SassyIcons"

  # README file
  s.files = ["README.md"]

  # CHANGELOG
  s.files += ["CHANGELOG.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Template Files
  # s.files += Dir.glob("templates/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}

  # Gems Dependencies
  s.add_dependency("sass",    [">= 3.3"])
  s.add_dependency("compass", [">=1.0.0.alpha.19"])
end
