import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API do CookInUp funcionando!');
});

app.get('/categorias', async (req, res) => {
    const busca = typeof req.query.busca === 'string' ? req.query.busca.trim() : '';
    try {
        const categorias = await prisma.categoria.findMany({
            where: busca ? { nome: { contains: busca } } : {},
            include: {
                ingredientes: true
            }
        });
        res.json(categorias);
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        res.status(500).json({ erro: "Erro ao buscar dados do banco." });
    }
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
