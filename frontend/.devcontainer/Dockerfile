FROM node:18.18.0

# Install common tools
RUN apt-get update \
  && apt-get install -y --no-install-recommends git curl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Create workspace
RUN mkdir -p /workspace
WORKDIR /workspace

# Use non-root node user
USER node
