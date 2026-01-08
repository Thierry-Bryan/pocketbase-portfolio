FROM scratch
COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
WORKDIR /app
EXPOSE 8090
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/app/pb_data"]
