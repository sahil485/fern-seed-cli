class Hello < Formula
    desc "Fern Seed CLI Skeleton"
    homepage "https://github.com/sahil485/homebrew-seed"
    url "https://github.com/sahil485/homebrew-seed/releases/download/v1.0.0/seed-macos-x64.tar.gz"
    sha256 "f2316d682586264f36e638afe17ceeeccef1771e3fcee19b7c53d5a53c896a7e"
    version "1.0.0"
    def install
      bin.install "seed"
    end
  end