FROM python:3
WORKDIR /app
RUN pip install fastapi
RUN pip install jinja2
COPY . .
EXPOSE 8000
CMD ["python", "./main.py"]