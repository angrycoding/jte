module.exports = [
	`{{return []->set->toJSON = "[]"}}`,
	`{{return []->set('foo', 'bar')->toJSON = '{"bar":"foo"}'}}`,
	`{{return []->set('foo', 'bar')->set('y', 'x')->toJSON = '{"bar":"foo","x":"y"}'}}`,
	`{{return []->set('foo')->toJSON = '["foo"]'}}`,
	`{{return []->set('foo')->set('bar')->toJSON = '["foo","bar"]'}}`,
	`{{return []->set('foo', 0)->set('bar', 1)->toJSON = '["foo","bar"]'}}`,
	`{{return []->set('foo', 1)->set('bar', 0)->toJSON = '{"1":"foo","0":"bar"}'}}`,
	`{{return [1:'B',2:'C']->set('A', 0)->toJSON = '{"1":"B","2":"C","0":"A"}'}}`,
	`{{return [1, 2, 3]->set(4, 3)->toJSON = '[1,2,3,4]'}}`,
	`{{return [1, 2, 3]->set(4, 4)->toJSON = '{"0":1,"1":2,"2":3,"4":4}'}}`,
];
