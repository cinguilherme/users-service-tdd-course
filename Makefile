build:
	npm run build
	docker build -t user-service .

unit:
	npm test

dev:
	npm run dev

migrate-dev:
	npx prisma migrate dev

seed:
	npx prisma db seed
