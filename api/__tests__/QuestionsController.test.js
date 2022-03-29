const controller = require('../controllers/QuestionsController');
const {getMockReq, getMockRes} = require("@jest-mock/express");
const {res, next} = getMockRes();

test('should respond with an object', async () => {
    const req = getMockReq();

    await controller.getQuestions(req, res, next);

    expect(res.json()).toBeInstanceOf(Object);
})
