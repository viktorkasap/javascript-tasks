################ Docker commands ################
# include .env - можно брать настройки из .env файла, к переменным обращаться так же $(VARIABLE)
# include .env

# вызывает по умолчанию команду help.
.PHONY: help test

help: ### Ignore - Show current help message
	@echo "✨ App Commands:"
	@grep -E '^[a-zA-Z_-]+:.*?✨.*$$' ./Makefile | awk '!/## Ignore/' | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "make \033[32m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""

###########################################
#								✨App Commands
###########################################
install: ## ✨ Install pnpm Required Packages for the App
	pnpm install

start: ## ✨ Starts the App Server in Development Mode
	@echo "🚀 Starting server..."
	pnpm start

build: type-check lint ## ✨ Builds the App in Production Mode (Compressed Files)
	@echo "🚀 [Build] Running ..."
	pnpm build
	@echo "🎉 [Build] Done!"

lint: ## ✨ Check & fix code style js
	@echo "🔎 [ESLint] Checking code style..."
	pnpm lint
	@echo "✅  [ESLint] Code style check passed"

pretty: ## ✨ Do pretty code css/js
	@echo "🚀 [Prettier] Formatting code..."
	pnpm pretty
	@echo "✅  [Prettier] Code style check passed"

test: ## ✨ Do pretty code css/js
	@echo "🚀 [Vitest] Testing code..."
	pnpm test
	@echo "✅  [Vitest] Testing check finished"

test-waiting: ## ✨ Do pretty code css/js
	@echo "🚀 [Vitest] Testing code..."
	pnpm test:waiting
	@echo "✅  [Vitest] Testing check finished"

test-coverage: ## ✨ Do pretty code css/js
	@echo "🚀 [Vitest] Testing code..."
	pnpm test:coverage
	@echo "✅  [Vitest] Testing check finished"


