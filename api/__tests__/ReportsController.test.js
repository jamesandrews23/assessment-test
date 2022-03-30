const controller = require('../controllers/ReportsController');
const {getMockReq, getMockRes} = require("@jest-mock/express");
const {res, next} = getMockRes();

test('submit answer check', async () => {
    const req = getMockReq();

    req.body.score = 85;
    await controller.submitAnswers(req, res, next);

    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toBeDefined();
});
