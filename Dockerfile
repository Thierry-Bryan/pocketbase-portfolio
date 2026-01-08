FROM alpine:latest
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY pocketbase /app/pocketbase
RUN chmod +x pocketbase
COPY pb_data /app/pb_data
CMD ["pocketbase", "serve", "--http=0.0.0.0:10000", "--dir=/app/pb_data"]
