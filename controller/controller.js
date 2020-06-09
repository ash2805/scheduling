exports.get_t0 = (req,res) => {
    t0 = new Date(req.body.t0);
    t0.setDate(t0.getDate() + 19)
    let LastDateOfEnrollment = ${t0.toDateString()};

    t0 = new Date(req.body.t0);
    t0.setDate(t0.getDate() + 9)
    let FirstRound = ${t0.toDateString()};

    t0 = new Date(req.body.t0);
    t0.setDate(t0.getDate() + 14)
    let PayAdmissionFee = ${t0.toDateString()

    t1 = new Date(req.body.t1);
    t1.setDate(t1.getDate() + 9)
    let LastDateOfAdmission = ${t1.toDateString()};

    t1 = new Date(req.body.t1);
    t1.setDate(t1.getDate() + 9)
    let t2 = ${t1.toDateString()};

    t1 = new Date(req.body.t1);
    t1.setDate(t1.getDate() + 14)
    let EnrollmentNumberAndVerification = ${t1.toDateString()};

    t1 = new Date(req.body.t1);
    t1.setDate(t1.getDate() + 24)
    let DeclearationOfExamSchedule = ${t1.toDateString()};

}
