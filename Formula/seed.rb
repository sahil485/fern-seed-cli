class Seed < Formula
    desc "Fern Seed CLI Skeleton"
    homepage "https://github.com/sahil485/homebrew-seed"
    url "https://github.com/sahil485/homebrew-seed/releases/download/v1.0.0/seed-macos-x64.tar.gz"
    sha256 "0ce3362e266747fe277e3d9777bd0f5fb269ed262c09727ab7713dbf1881b759"
    version "1.0.0"
    def install
      bin.install "seed"
    end
  end