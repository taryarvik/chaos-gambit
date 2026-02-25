# Chaos Engine (готово для GitHub/Vercel)

Это твой код, упакованный как нормальный Vite+React проект.

## Локальный запуск (Windows)
1) Установи Node.js LTS
2) В папке проекта:
```bash
npm install
npm run dev
```
Открой ссылку из терминала (обычно http://localhost:5173)

## Деплой на Vercel
1) Залей **все файлы** из этого проекта в репозиторий GitHub (кроме node_modules — её тут нет)
2) Vercel → New Project → Import from GitHub
3) Framework: **Vite**
4) Build Command: `npm run build`
5) Output: `dist`

## Важно
- В PowerShell иногда npm блокируется политиками. Если `npm` ругается на ExecutionPolicy — запускай команды в **cmd.exe**.
