from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from jinja2 import Environment, FileSystemLoader, TemplateNotFound, Template

app = FastAPI()

# Montar el directorio estático para servir archivos como CSS, JS e imágenes
app.mount("/static", StaticFiles(directory="static"), name="static")

# Configurar el entorno de Jinja2 para que busque plantillas en la raíz del proyecto
env = Environment(loader=FileSystemLoader("."))

@app.get("/", response_class=HTMLResponse)
async def read_root():
    with open("static/index.html",encoding="utf-8") as f:
        template = Template(f.read())
    return template.render()
# async def read_root():
#     try:
#         template = env.get_template("index.html")
#         html_content = template.render(title="Mi Página Web")
#         return HTMLResponse(content=html_content)
#     except TemplateNotFound:
#         return HTMLResponse(content="<h1>Template not found</h1>", status_code=404)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
