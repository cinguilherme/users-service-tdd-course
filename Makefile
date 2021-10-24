build:
	npm run build
	docker build -t user-service .

dev:
	npm run dev

seed:
	npx prisma db seed
