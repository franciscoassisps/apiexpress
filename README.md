# apiexpress
# collections
{
	"info": {
		"_postman_id": "ec311ead-165e-43e0-812f-0b0fc74649f8",
		"name": "apiexpress",
		"description": "testando a apiexpress",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "listar colaboradores",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/colaboradores",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"colaboradores"
					]
				}
			},
			"response": []
		},
		{
			"name": "cadastrar colaboradores",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"cpf\":\"483.026.940-53\",\"nome\":\"Pedro\",\"email\":\"pedrosampaio@gmail.com\",\"salario\":\"200\",\"data_admissao\":\"14/03/1990\",\"data_demissao\":\"21/04/2000\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/colaboradores",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"colaboradores"
					]
				}
			},
			"response": []
		},
		{
			"name": "atualizar colaboradores",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"nome\":\"Paula\",\"email\":\"Paula@gmail.com\",\"password\":\"paulanova\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/colaboradores/id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"colaboradores",
						"id"
					]
				}
			},
			"response": []
		},
		{
			"name": "deletar colaboradores",
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"nome\":\"Paula\",\"email\":\"Paula@gmail.com\",\"password\":\"paulanova\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/colaboradores/id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"colaboradores",
						"id"
					]
				}
			},
			"response": []
		},
		{
			"name": "listar empresas",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"cnpj\":\"54.454.232/0001-49\",\"razao_social\":\"buyIt\",\"quantidade_func\":\"11\",\"ramo\":\"compras\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/empresas",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"empresas"
					]
				}
			},
			"response": []
		},
		{
			"name": "cadastrar empresas",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"cnpj\":\"54.454.232/0001-49\",\"razao_social\":\"buyIt\",\"quantidade_func\":\"11\",\"ramo\":\"compras\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/empresas",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"empresas"
					]
				}
			},
			"response": []
		},
		{
			"name": "atualizar empresas",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"cnpj\":\"54.454.232/0001-49\",\"razao_social\":\"buyIt\",\"quantidade_func\":\"11\",\"ramo\":\"compras\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/empresas",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"empresas"
					]
				}
			},
			"response": []
		},
		{
			"name": "deletar empresas",
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"cnpj\":\"54.454.232/0001-49\",\"razao_social\":\"buyIt\",\"quantidade_func\":\"11\",\"ramo\":\"compras\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/empresas/54.454.232/0001-49",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"empresas",
						"54.454.232",
						"0001-49"
					]
				}
			},
			"response": []
		},
		{
			"name": "listar usuarios",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"nome\":\"Paula\",\"email\":\"paula@gmail.com\",\"password\":\"paulanova\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "cadastrar usuarios",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"nome\":\"Paula\",\"email\":\"paula@gmail.com\",\"password\":\"paulanova\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "atualizar usuarios",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"nome\":\"Paula\",\"email\":\"paula@gmail.com\",\"password\":\"paulanova\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/2560a482-5c29-4a74-9339-12284f6edef9",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"2560a482-5c29-4a74-9339-12284f6edef9"
					]
				}
			},
			"response": []
		},
		{
			"name": "deletar usuarios",
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/2560a482-5c29-4a74-9339-12284f6edef9",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"2560a482-5c29-4a74-9339-12284f6edef9"
					]
				}
			},
			"response": []
		},
		{
			"name": "valida usuario",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1NjBhNDgyLTVjMjktNGE3NC05MzM5LTEyMjg0ZjZlZGVmOSIsImlhdCI6MTY0NjU5OTEzNCwiZXhwIjoxNjQ2Njg1NTM0fQ.IYSiMQPy0SM7u6O7C9o3bCsAf0bXnkmQnWhVGXdAJTA",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"email\":\"paula@gmail.com\",\"password\":\"paulanova\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/autentica",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"autentica"
					]
				}
			},
			"response": []
		},
		{
			"name": "autentica usuario",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "",
						"value": "",
						"type": "text",
						"disabled": true
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"email\":\"paula@gmail.com\",\"password\":\"paulanova\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/autentica",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"autentica"
					]
				}
			},
			"response": []
		}
	],
	"protocolProfileBehavior": {}
}
