class Hello < Formula
    desc "Fern Seed CLI Skeleton"
    homepage "https://github.com/sahil485/homebrew-seed"
    url "https://github.com/sahil485/homebrew-seed/releases/tag/v1.0.0"
    sha256 "6c1870db6a831ad868a327f7fcc6418c54de6c8cfa4577a217ba72ea386b37fe"
    version "1.0.0"
    def install
      bin.install "seed"
    end
  end