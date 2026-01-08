FROM alpine:latest
RUN apk add --no-cache libc6-compat unzip curl
WORKDIR /app
RUN curl -L https://github.com/pocketbase/pocketbase/releases/download/v0.35.0/pocketbase_0.35.0_linux_amd64.zip -o pocketbase.zip && unzip pocketbase.zip && chmod +x pocketbase && rm pocketbase.zip
COPY pb_data /app/pb_data
CMD ["./pocketbase", "serve", "--http=0.0.0.0:$PORT", "--dir=/app/pb_data"]
