FROM postgres:latest
ENV POSTGRES_DB temp

COPY schema.sql /docker-entrypoint-initdb.d/
EXPOSE 5432