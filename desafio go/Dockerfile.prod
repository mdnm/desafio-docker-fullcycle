FROM golang:1.17.2-alpine3.14 as builder

WORKDIR /usr/app

COPY . .

RUN go mod init hello && \
  go build


FROM scratch
WORKDIR /exec
COPY --from=builder /usr/app/hello .
CMD ["/exec/hello"]