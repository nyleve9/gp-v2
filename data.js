const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    message: String,
    index: Number,
    fulltitle: String,
    title: String,
    hierarchy: Number,
    jobtype: String,
    jobs2016: Number,
    jobs2026: Number,
    delta_num: Number,
    delta_perc: Number,
    perc_self_employed_2016: Number,
    annual_avg_openings_2016_26: Number,
    med_annual_wage_2017: Number,
    entry_ed_req: String,
    work_exp: String,
    otj_training_to_competency: String,
    ttl: String,
    Level0: String,
    Level1: String,
    Level2: String,
    Level3: String,
    Level4: String,
    pathString: String
  }
);

// export the new Schema so we can modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);