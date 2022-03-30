const controller = require('../controllers/QuestionsController');
const {getMockReq, getMockRes} = require("@jest-mock/express");
const {res, next} = getMockRes();

test('should be a valid response', async () => {
    const req = getMockReq();

    await controller.getQuestions(req, res, next);

    expect(typeof res.send).toEqual('function');
})
