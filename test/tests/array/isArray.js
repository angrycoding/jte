module.exports = [
	`{{return []->isArray->toJSON = "true"}}`,
	`{{return [1, 2, 3]->isArray->toJSON = "true"}}`,
	`{{return [foo:1, x:2, y:3]->isArray->toJSON = "true"}}`,
	`{{return global->isArray->toJSON = "true"}}`,
	`{{return undefined->isArray->toJSON = "false"}}`,
	`{{return null->isArray->toJSON = "false"}}`,
	`{{return "string"->isArray->toJSON = "false"}}`,
	`{{return ""->isArray->toJSON = "false"}}`,
	`{{return 10->isArray->toJSON = "false"}}`,
	`{{return 0->isArray->toJSON = "false"}}`,
	`{{return /regexp/->isArray->toJSON = "false"}}`,
	`{{return true->isArray->toJSON = "false"}}`,
	`{{return false->isArray->toJSON = "false"}}`,
	`{{return (=>10)->isArray->toJSON = "false"}}`,
];
