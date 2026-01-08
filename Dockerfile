FROM alpine:latest
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
EXPOSE $PORT
CMD ["./pocketbase", "serve", "--http=0.0.0.0:$PORT", "--dir=/app/pb_data"]
