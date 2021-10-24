build:
	npm run build
	docker build -t user-service .

unit:
	npm test

dev:
	npm run dev

seed:
	npx prisma db seed
